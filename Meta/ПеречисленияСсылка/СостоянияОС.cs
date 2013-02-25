
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///Состояния ОС
	///</summary>
	[DataContract]
	public enum СостоянияОС
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///Принято к учету
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"02c21c5a-74c6-4031-99e5-a20dfe9da906\", \"Представление\":\"ПринятоКУчету\"}")]
		ПринятоКУчету = 0,//Принято к учету
	///<summary>
	///Введено в эксплуатацию
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"6568c56a-3952-43bd-9505-7f461da7b57e\", \"Представление\":\"ВведеноВЭксплуатацию\"}")]
		ВведеноВЭксплуатацию = 1,//Введено в эксплуатацию
	///<summary>
	///Снято с учета
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e4d0ced6-b4b1-4ed5-be2a-f413ffaec724\", \"Представление\":\"СнятоСУчета\"}")]
		СнятоСУчета = 2,//Снято с учета
	}
	public static partial class СостоянияОС_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Принято к учету
		///</summary>
		public static readonly Guid ПринятоКУчету = new Guid("0da2e599-9dfe-06a9-4031-74c602c21c5a");//Принято к учету
		///<summary>
		///Введено в эксплуатацию
		///</summary>
		public static readonly Guid ВведеноВЭксплуатацию = new Guid("467f0595-a71d-7eb5-43bd-39526568c56a");//Введено в эксплуатацию
		///<summary>
		///Снято с учета
		///</summary>
		public static readonly Guid СнятоСУчета = new Guid("13f42abe-aeff-24c7-4ed5-b4b1e4d0ced6");//Снято с учета
		public static СостоянияОС Получить(this СостоянияОС Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияОС Получить(this СостоянияОС Значение, Guid Ссылка)
		{
			if(Ссылка == ПринятоКУчету)
			{
				return СостоянияОС.ПринятоКУчету;
			}
			else if(Ссылка == ВведеноВЭксплуатацию)
			{
				return СостоянияОС.ВведеноВЭксплуатацию;
			}
			else if(Ссылка == СнятоСУчета)
			{
				return СостоянияОС.СнятоСУчета;
			}
			return СостоянияОС.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияОС Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияОС Значение)
		{
			switch (Значение)
			{
				case СостоянияОС.ПринятоКУчету: return ПринятоКУчету;
				case СостоянияОС.ВведеноВЭксплуатацию: return ВведеноВЭксплуатацию;
				case СостоянияОС.СнятоСУчета: return СнятоСУчета;
			}
			return Guid.Empty;
		}
	}
}