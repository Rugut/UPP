
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Общ)
	///</summary>
	[DataContract]
	public enum ВидыУчетаВремени
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"3dd28f7c-20ec-4a1c-ab7c-3d43ff2df36a\", \"Представление\":\"ПоДням\"}")]
		ПоДням = 0,//По дням
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c6de75c8-4deb-4e0e-92a0-3be786f837b8\", \"Представление\":\"ПоЧасам\"}")]
		ПоЧасам = 1,//По часам
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"2f39ba76-eebd-4233-9e08-e42d9e5b139d\", \"Представление\":\"ПоВечернимЧасам\"}")]
		ПоВечернимЧасам = 2,//По вечерним часам
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"3cead926-5192-4714-a4a0-6c6b6ef4f469\", \"Представление\":\"ПоНочнымЧасам\"}")]
		ПоНочнымЧасам = 3,//По ночным часам
	}
	public static partial class ВидыУчетаВремени_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПоДням = new Guid("433d7cab-2dff-6af3-4a1c-20ec3dd28f7c");//По дням
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПоЧасам = new Guid("e73ba092-f886-b837-4e0e-4debc6de75c8");//По часам
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПоВечернимЧасам = new Guid("2de4089e-5b9e-9d13-4233-eebd2f39ba76");//По вечерним часам
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПоНочнымЧасам = new Guid("6b6ca0a4-f46e-69f4-4714-51923cead926");//По ночным часам
		public static ВидыУчетаВремени Получить(this ВидыУчетаВремени Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыУчетаВремени Получить(this ВидыУчетаВремени Значение, Guid Ссылка)
		{
			if(Ссылка == ПоДням)
			{
				return ВидыУчетаВремени.ПоДням;
			}
			else if(Ссылка == ПоЧасам)
			{
				return ВидыУчетаВремени.ПоЧасам;
			}
			else if(Ссылка == ПоВечернимЧасам)
			{
				return ВидыУчетаВремени.ПоВечернимЧасам;
			}
			else if(Ссылка == ПоНочнымЧасам)
			{
				return ВидыУчетаВремени.ПоНочнымЧасам;
			}
			return ВидыУчетаВремени.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыУчетаВремени Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыУчетаВремени Значение)
		{
			switch (Значение)
			{
				case ВидыУчетаВремени.ПоДням: return ПоДням;
				case ВидыУчетаВремени.ПоЧасам: return ПоЧасам;
				case ВидыУчетаВремени.ПоВечернимЧасам: return ПоВечернимЧасам;
				case ВидыУчетаВремени.ПоНочнымЧасам: return ПоНочнымЧасам;
			}
			return Guid.Empty;
		}
	}
}