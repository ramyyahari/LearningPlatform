a = [0 1 2];
b = [3 -1 2];
junk = 0;

for k = 1:3
	disp('K');
	disp(k);
	disp('old junk');
   disp(junk);
   disp('aofk');
   disp(a(4-k));
   disp('bofk');
   disp(b(k));
   junk = junk + a(4-k).*b(k);
   disp('new junk');
   disp(junk);
end
disp('final');
disp(k);
disp(junk);