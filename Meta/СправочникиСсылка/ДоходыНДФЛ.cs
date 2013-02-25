
using System;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ДоходыНДФЛ:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1b05873f-a6a2-4c1d-931b-5b33a7da7a2b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191217.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*20*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.НДФЛСтавкиНалогообложенияРезидента СтавкаНалогообложенияРезидента {get;set;}//Ставка налогообложения резидента
		public string/*(4)*/ КодДляОтчетности {get;set;}//Код для отчетности
		public bool НеОблагаетсяУНалоговогоАгента {get;set;}//Не облагается у налогового агента
		public bool НеОтражаетсяВОтчетности2010 {get;set;}//Не отражается в отчетности-2010
		public bool УчитыватьПоПериодуДействия {get;set;}//Учитывать по периоду действия
		
		public ДоходыНДФЛ()
		{
		}
		
		public ДоходыНДФЛ(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2297RRef [СтавкаНалогообложенияРезидента]
					,_Fld2298 [КодДляОтчетности]
					,_Fld2299 [НеОблагаетсяУНалоговогоАгента]
					,_Fld2300 [НеОтражаетсяВОтчетности2010]
					,_Fld2301 [УчитыватьПоПериодуДействия]
					From _Reference95(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							СтавкаНалогообложенияРезидента = V82.Перечисления/*Ссылка*/.НДФЛСтавкиНалогообложенияРезидента.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							КодДляОтчетности = Читалка.GetString(7);
							НеОблагаетсяУНалоговогоАгента = ((byte[])Читалка.GetValue(8))[0]==1;
							НеОтражаетсяВОтчетности2010 = ((byte[])Читалка.GetValue(9))[0]==1;
							УчитыватьПоПериодуДействия = ((byte[])Читалка.GetValue(10))[0]==1;
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.СправочникиОбъект.ДоходыНДФЛ  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДоходыНДФЛ();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СтавкаНалогообложенияРезидента = СтавкаНалогообложенияРезидента;
			Объект.КодДляОтчетности = КодДляОтчетности;
			Объект.НеОблагаетсяУНалоговогоАгента = НеОблагаетсяУНалоговогоАгента;
			Объект.НеОтражаетсяВОтчетности2010 = НеОтражаетсяВОтчетности2010;
			Объект.УчитыватьПоПериодуДействия = УчитыватьПоПериодуДействия;
			return Объект;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}