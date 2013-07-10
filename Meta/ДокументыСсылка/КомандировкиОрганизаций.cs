
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КомандировкиОрганизаций:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("ac541a78-1366-4a89-9886-d177270a89d3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012018.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*(0)*/ СтранаНазначения {get;set;}//Страна назначения
		public string/*(0)*/ ОрганизацияНазначения {get;set;}//Организация назначения
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(0)*/ ОснованиеКомандировки {get;set;}//Основание командировки
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		public V82.ДокументыСсылка.КомандировкиОрганизаций ИсправляемыйДокумент {get;set;}//Исправляемый документ
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
		
		public КомандировкиОрганизаций()
		{
		}
		
		public КомандировкиОрганизаций(byte[] УникальныйИдентификатор)
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
					,_Fld5477RRef [Организация]
					,_Fld5478 [СтранаНазначения]
					,_Fld5479 [ОрганизацияНазначения]
					,_Fld5480 [Комментарий]
					,_Fld5481RRef [Ответственный]
					,_Fld5482 [ОснованиеКомандировки]
					,_Fld5483 [КраткийСоставДокумента]
					,_Fld26810 [ДанныеПрошлойВерсии]
					,_Fld26811RRef [ИсправляемыйДокумент]
					,_Fld26812 [ДвиженияИсправляемогоДокумента]
					From _Document298(NOLOCK)
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
							СтранаНазначения = Читалка.GetString(5);
							ОрганизацияНазначения = Читалка.GetString(6);
							Комментарий = Читалка.GetString(7);
							ОснованиеКомандировки = Читалка.GetString(9);
							КраткийСоставДокумента = Читалка.GetString(10);
							ДанныеПрошлойВерсии = ((byte[])Читалка.GetValue(11))[0]==1;
							ИсправляемыйДокумент = new V82.ДокументыСсылка.КомандировкиОрганизаций((byte[])Читалка.GetValue(12));
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
		
		public V82.ДокументыОбъект.КомандировкиОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.КомандировкиОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.СтранаНазначения = СтранаНазначения;
			Объект.ОрганизацияНазначения = ОрганизацияНазначения;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ОснованиеКомандировки = ОснованиеКомандировки;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ДанныеПрошлойВерсии = ДанныеПрошлойВерсии;
			Объект.ИсправляемыйДокумент = ИсправляемыйДокумент;
			Объект.ДвиженияИсправляемогоДокумента = ДвиженияИсправляемогоДокумента;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.КомандировкиОрганизаций ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.КомандировкиОрганизаций)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.КомандировкиОрганизаций(УникальныйИдентификатор);
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