
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
	public partial class СведенияОДоходахФизлиц:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("dca5d4d5-f330-44da-b72a-de8282de0105");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012017.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public decimal/*(4)*/ НалоговыйПериод {get;set;}//Налоговый период
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(20)*/ КонтактныйТелефонОтветственного {get;set;}//Контактный телефон ответственного
		public bool УдалитьДляПередачиВИМНС {get;set;}//Для передачи в ИФНС
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьОтветственного {get;set;}//Должность ответственного
		public string/*(36)*/ ИдентификаторФайла {get;set;}//Идентификатор файла
		public V82.Перечисления/*Ссылка*/.ПорядокФормированияСправкиОДоходахФизлица НазначениеСправки {get;set;}//Назначение справки
		
		public СведенияОДоходахФизлиц()
		{
		}
		
		public СведенияОДоходахФизлиц(byte[] УникальныйИдентификатор)
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
					,_Fld11369RRef [Организация]
					,_Fld11370 [НалоговыйПериод]
					,_Fld11371RRef [Ответственный]
					,_Fld11372 [КонтактныйТелефонОтветственного]
					,_Fld11373 [УдалитьДляПередачиВИМНС]
					,_Fld11374 [Комментарий]
					,_Fld11375 [КраткийСоставДокумента]
					,_Fld11376RRef [ДолжностьОтветственного]
					,_Fld11377 [ИдентификаторФайла]
					,_Fld18841RRef [НазначениеСправки]
					From _Document447(NOLOCK)
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
							НалоговыйПериод = Читалка.GetDecimal(5);
							КонтактныйТелефонОтветственного = Читалка.GetString(7);
							УдалитьДляПередачиВИМНС = ((byte[])Читалка.GetValue(8))[0]==1;
							Комментарий = Читалка.GetString(9);
							КраткийСоставДокумента = Читалка.GetString(10);
							ИдентификаторФайла = Читалка.GetString(12);
							НазначениеСправки = V82.Перечисления/*Ссылка*/.ПорядокФормированияСправкиОДоходахФизлица.ПустаяСсылка.Получить((byte[])Читалка.GetValue(13));
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
		
		public V82.ДокументыОбъект.СведенияОДоходахФизлиц  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СведенияОДоходахФизлиц();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.НалоговыйПериод = НалоговыйПериод;
			Объект.Ответственный = Ответственный;
			Объект.КонтактныйТелефонОтветственного = КонтактныйТелефонОтветственного;
			Объект.УдалитьДляПередачиВИМНС = УдалитьДляПередачиВИМНС;
			Объект.Комментарий = Комментарий;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ДолжностьОтветственного = ДолжностьОтветственного;
			Объект.ИдентификаторФайла = ИдентификаторФайла;
			Объект.НазначениеСправки = НазначениеСправки;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СведенияОДоходахФизлиц ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СведенияОДоходахФизлиц)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СведенияОДоходахФизлиц(УникальныйИдентификатор);
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