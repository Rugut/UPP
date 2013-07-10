
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
	public partial class СправкаПоНДФЛВНалоговыйОрган:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("476c9811-c737-4c21-a618-8f375a02b69a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012031.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public decimal/*(4)*/ НалоговыйПериод {get;set;}//Налоговый период
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public string/*(21)*/ ОКАТО_КПП {get;set;}//ОКАТО/КПП
		public V82.Перечисления/*Ссылка*/.ОснованияДляПредставленияСправок2НДФЛ ОснованиеДляПредставленияСправок {get;set;}//Основание для представления справок
		public string/*(84)*/ ИмяФайла {get;set;}//Имя файла
		public string/*(20)*/ Телефон {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		public V82.СправочникиСсылка.ФизическиеЛица СправкуПодписал {get;set;}//Справку подписал
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьПодписавшегоЛица {get;set;}//Должность подписавшего лица
		public bool ПринятоНалоговымОрганом {get;set;}//Принято в ИФНС
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Ведет себя по правилам 2010 года.
		///</summary>
		public bool СпециальныйДокумент2011года {get;set;}//Специальный документ 2011 года
		public string/*(4)*/ КодИФНС {get;set;}//Код ИФНС
		
		public СправкаПоНДФЛВНалоговыйОрган()
		{
		}
		
		public СправкаПоНДФЛВНалоговыйОрган(byte[] УникальныйИдентификатор)
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
					,_Fld25454 [НалоговыйПериод]
					,_Fld25455RRef [Организация]
					,_Fld25456 [ОКАТО_КПП]
					,_Fld25457RRef [ОснованиеДляПредставленияСправок]
					,_Fld25458 [ИмяФайла]
					,_Fld25459 [Телефон]
					,_Fld25460RRef [ГлавныйБухгалтер]
					,_Fld25461RRef [СправкуПодписал]
					,_Fld25462RRef [ДолжностьПодписавшегоЛица]
					,_Fld25463 [ПринятоНалоговымОрганом]
					,_Fld25464 [КраткийСоставДокумента]
					,_Fld25465RRef [Ответственный]
					,_Fld25466 [Комментарий]
					,_Fld25467 [СпециальныйДокумент2011года]
					,_Fld25468 [КодИФНС]
					From _Document23174(NOLOCK)
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
							НалоговыйПериод = Читалка.GetDecimal(4);
							ОКАТО_КПП = Читалка.GetString(6);
							ОснованиеДляПредставленияСправок = V82.Перечисления/*Ссылка*/.ОснованияДляПредставленияСправок2НДФЛ.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							ИмяФайла = Читалка.GetString(8);
							Телефон = Читалка.GetString(9);
							ПринятоНалоговымОрганом = ((byte[])Читалка.GetValue(13))[0]==1;
							КраткийСоставДокумента = Читалка.GetString(14);
							Комментарий = Читалка.GetString(16);
							СпециальныйДокумент2011года = ((byte[])Читалка.GetValue(17))[0]==1;
							КодИФНС = Читалка.GetString(18);
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
		
		public V82.ДокументыОбъект.СправкаПоНДФЛВНалоговыйОрган  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СправкаПоНДФЛВНалоговыйОрган();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.НалоговыйПериод = НалоговыйПериод;
			Объект.Организация = Организация;
			Объект.ОКАТО_КПП = ОКАТО_КПП;
			Объект.ОснованиеДляПредставленияСправок = ОснованиеДляПредставленияСправок;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Телефон = Телефон;
			Объект.ГлавныйБухгалтер = ГлавныйБухгалтер;
			Объект.СправкуПодписал = СправкуПодписал;
			Объект.ДолжностьПодписавшегоЛица = ДолжностьПодписавшегоЛица;
			Объект.ПринятоНалоговымОрганом = ПринятоНалоговымОрганом;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.СпециальныйДокумент2011года = СпециальныйДокумент2011года;
			Объект.КодИФНС = КодИФНС;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СправкаПоНДФЛВНалоговыйОрган ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СправкаПоНДФЛВНалоговыйОрган)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СправкаПоНДФЛВНалоговыйОрган(УникальныйИдентификатор);
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