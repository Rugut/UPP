
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(–егл)
		///</summary>
	public enum ¬иды”четаѕоѕЅ”18
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///Ќалоговый учет
	///</summary>
		Ќ” = 0,
	///<summary>
	///”чет посто€нных разниц
	///</summary>
		ѕ– = 1,
	///<summary>
	///”чет временных разниц
	///</summary>
		¬– = 2,
	}
	public static partial class ¬иды”четаѕоѕЅ”18_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///Ќалоговый учет
		///</summary>
		public static readonly Guid Ќ” = new Guid("fffbfc82-bae1-859d-4b5c-e60440f3e05d");
		///<summary>
		///”чет посто€нных разниц
		///</summary>
		public static readonly Guid ѕ– = new Guid("57fd0aab-655f-5beb-41f5-8ed70d499bd0");
		///<summary>
		///”чет временных разниц
		///</summary>
		public static readonly Guid ¬– = new Guid("87bb509e-d440-0c7d-486c-e5f26649350d");
		public static ¬иды”четаѕоѕЅ”18 ѕолучить(this ¬иды”четаѕоѕЅ”18 «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды”четаѕоѕЅ”18 ѕолучить(this ¬иды”четаѕоѕЅ”18 «начение, Guid —сылка)
		{
			if(—сылка == Ќ”)
			{
				return ¬иды”четаѕоѕЅ”18.Ќ”;
			}
			else if(—сылка == ѕ–)
			{
				return ¬иды”четаѕоѕЅ”18.ѕ–;
			}
			else if(—сылка == ¬–)
			{
				return ¬иды”четаѕоѕЅ”18.¬–;
			}
			return ¬иды”четаѕоѕЅ”18.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды”четаѕоѕЅ”18 «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды”четаѕоѕЅ”18 «начение)
		{
			switch («начение)
			{
				case ¬иды”четаѕоѕЅ”18.Ќ”: return Ќ”;
				case ¬иды”четаѕоѕЅ”18.ѕ–: return ѕ–;
				case ¬иды”четаѕоѕЅ”18.¬–: return ¬–;
			}
			return Guid.Empty;
		}
	}
}
