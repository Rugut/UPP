
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class АктуализацияБюджетов:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("951ee3b1-cb1f-4ba8-8cd0-f1dec315435b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191125.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		public DateTime ДатаНачала {get;set;}//Дата начала
		public DateTime ДатаКонца {get;set;}//Дата конца
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		public bool АктуализироватьБюджеты {get;set;}//Актуализировать бюджеты
		public bool ПеренестиТранзакции {get;set;}//Перенести транзакции
		
		public АктуализацияБюджетов()
		{
		}
		
		public АктуализацияБюджетов(byte[] УникальныйИдентификатор)
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
					,_Fld4877RRef [Сценарий]
					,_Fld4878 [ДатаНачала]
					,_Fld4879 [ДатаКонца]
					,_Fld4880RRef [Ответственный]
					,_Fld4881 [Комментарий]
					,_Fld4882RRef [Состояние]
					,_Fld4883 [АктуализироватьБюджеты]
					,_Fld4884 [ПеренестиТранзакции]
					From _Document304(NOLOCK)
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
							ДатаНачала = Читалка.GetDateTime(5);
							ДатаКонца = Читалка.GetDateTime(6);
							Комментарий = Читалка.GetString(8);
							Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							АктуализироватьБюджеты = ((byte[])Читалка.GetValue(10))[0]==1;
							ПеренестиТранзакции = ((byte[])Читалка.GetValue(11))[0]==1;
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
		
		public V82.ДокументыОбъект.АктуализацияБюджетов  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.АктуализацияБюджетов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Сценарий = Сценарий;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаКонца = ДатаКонца;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.Состояние = Состояние;
			Объект.АктуализироватьБюджеты = АктуализироватьБюджеты;
			Объект.ПеренестиТранзакции = ПеренестиТранзакции;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.АктуализацияБюджетов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.АктуализацияБюджетов)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.АктуализацияБюджетов(УникальныйИдентификатор);
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