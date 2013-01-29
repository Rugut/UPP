
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ¬иды”чета¬ремени
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///(ќбщ)
	///</summary>
		ѕоƒн€м = 0,//ѕо дн€м
	///<summary>
	///(ќбщ)
	///</summary>
		ѕо„асам = 1,//ѕо часам
	///<summary>
	///(ќбщ)
	///</summary>
		ѕо¬ечерним„асам = 2,//ѕо вечерним часам
	///<summary>
	///(ќбщ)
	///</summary>
		ѕоЌочным„асам = 3,//ѕо ночным часам
	}
	public static partial class ¬иды”чета¬ремени_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ѕоƒн€м = new Guid("433d7cab-2dff-6af3-4a1c-20ec3dd28f7c");//ѕо дн€м
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ѕо„асам = new Guid("e73ba092-f886-b837-4e0e-4debc6de75c8");//ѕо часам
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ѕо¬ечерним„асам = new Guid("2de4089e-5b9e-9d13-4233-eebd2f39ba76");//ѕо вечерним часам
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ѕоЌочным„асам = new Guid("6b6ca0a4-f46e-69f4-4714-51923cead926");//ѕо ночным часам
		public static ¬иды”чета¬ремени ѕолучить(this ¬иды”чета¬ремени «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды”чета¬ремени ѕолучить(this ¬иды”чета¬ремени «начение, Guid —сылка)
		{
			if(—сылка == ѕоƒн€м)
			{
				return ¬иды”чета¬ремени.ѕоƒн€м;
			}
			else if(—сылка == ѕо„асам)
			{
				return ¬иды”чета¬ремени.ѕо„асам;
			}
			else if(—сылка == ѕо¬ечерним„асам)
			{
				return ¬иды”чета¬ремени.ѕо¬ечерним„асам;
			}
			else if(—сылка == ѕоЌочным„асам)
			{
				return ¬иды”чета¬ремени.ѕоЌочным„асам;
			}
			return ¬иды”чета¬ремени.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды”чета¬ремени «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды”чета¬ремени «начение)
		{
			switch («начение)
			{
				case ¬иды”чета¬ремени.ѕоƒн€м: return ѕоƒн€м;
				case ¬иды”чета¬ремени.ѕо„асам: return ѕо„асам;
				case ¬иды”чета¬ремени.ѕо¬ечерним„асам: return ѕо¬ечерним„асам;
				case ¬иды”чета¬ремени.ѕоЌочным„асам: return ѕоЌочным„асам;
			}
			return Guid.Empty;
		}
	}
}
