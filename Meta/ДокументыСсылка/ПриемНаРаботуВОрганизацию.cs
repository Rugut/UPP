
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл) Прием на работу в организацию
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПриемНаРаботуВОрганизацию:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("2567f4b3-dfe9-4814-9cf1-206664f909d9");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191744.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public decimal/*(5.2)*/ УдалитьРайонныйКоэффициент {get;set;}//районный коэффициент
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.Перечисления/*Ссылка*/.ВидыЗанятостиВОрганизации УдалитьВидЗанятости {get;set;}//Удалить вид занятости
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию ИсправляемыйДокумент {get;set;}//Исправляемый документ
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
		
		public ПриемНаРаботуВОрганизацию()
		{
		}
		
		public ПриемНаРаботуВОрганизацию(byte[] УникальныйИдентификатор)
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
					,_Number [Номер]
					,_Fld14553RRef [Организация]
					,_Fld14554 [Комментарий]
					,_Fld14555RRef [Ответственный]
					,_Fld14556 [УдалитьРайонныйКоэффициент]
					,_Fld14557 [КраткийСоставДокумента]
					,_Fld14558RRef [УдалитьВидЗанятости]
					,_Fld14559 [ДанныеПрошлойВерсии]
					,_Fld14560RRef [ИсправляемыйДокумент]
					,_Fld14561 [ДвиженияИсправляемогоДокумента]
					From _Document537(NOLOCK)
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
							Номер = Читалка.GetString(3);
							Комментарий = Читалка.GetString(5);
							УдалитьРайонныйКоэффициент = Читалка.GetDecimal(7);
							КраткийСоставДокумента = Читалка.GetString(8);
							УдалитьВидЗанятости = V82.Перечисления/*Ссылка*/.ВидыЗанятостиВОрганизации.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							ДанныеПрошлойВерсии = ((byte[])Читалка.GetValue(10))[0]==1;
							ИсправляемыйДокумент = new V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию((byte[])Читалка.GetValue(11));
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
		
		public V82.ДокументыОбъект.ПриемНаРаботуВОрганизацию  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПриемНаРаботуВОрганизацию();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.УдалитьРайонныйКоэффициент = УдалитьРайонныйКоэффициент;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.УдалитьВидЗанятости = УдалитьВидЗанятости;
			Объект.ДанныеПрошлойВерсии = ДанныеПрошлойВерсии;
			Объект.ИсправляемыйДокумент = ИсправляемыйДокумент;
			Объект.ДвиженияИсправляемогоДокумента = ДвиженияИсправляемогоДокумента;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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