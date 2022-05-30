{
  description = "A basic dev env";


  outputs = { self, nixpkgs }: let pkgs = nixpkgs.legacyPackages.x86_64-linux;
  in {
    devShell.x86_64-linux = pkgs.mkShell {
      packages = [pkgs.python3];
      shellHook = ''
        alias python-http-server="python3 -m http.server"
      '';
    };
  };
}
