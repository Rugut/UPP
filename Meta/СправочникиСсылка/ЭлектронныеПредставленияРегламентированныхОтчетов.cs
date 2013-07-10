
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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ЭлектронныеПредставленияРегламентированныхОтчетов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("231b77a9-a435-4ca7-a47e-331a839d6faa");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012007.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*8*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public object Получатель {get;set;}
		public object ВидОтчета {get;set;}//Вид отчета
		public DateTime ДатаНачала {get;set;}//Дата начала
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		public string/*(0)*/ Комментарий {get;set;}
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		public DateTime ДатаИмпорта {get;set;}//Дата импорта
		public V82.Перечисления/*Ссылка*/.ТипыКонтролирующихОрганов ТипПолучателя {get;set;}//Тип получателя
		
		public ЭлектронныеПредставленияРегламентированныхОтчетов()
		{
		}
		
		public ЭлектронныеПредставленияРегламентированныхОтчетов(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ЭлектронныеПредставленияРегламентированныхОтчетов(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
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
					,_Fld23985RRef [Организация]
					,_Fld23986_TYPE [Получатель_Тип],_Fld23986_RRRef [Получатель],_Fld23986_RTRef [Получатель_Вид]
					,_Fld23987_TYPE [ВидОтчета_Тип],_Fld23987_RRRef [ВидОтчета],_Fld23987_RTRef [ВидОтчета_Вид]
					,_Fld23988 [ДатаНачала]
					,_Fld23989 [ДатаОкончания]
					,_Fld23991 [Комментарий]
					,_Fld23992RRef [Периодичность]
					,_Fld23993 [ДатаИмпорта]
					,_Fld23994RRef [ТипПолучателя]
					From _Reference23138(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(6),Глубина+1);
							ДатаНачала = Читалка.GetDateTime(13);
							ДатаОкончания = Читалка.GetDateTime(14);
							Комментарий = Читалка.GetString(15);
							Периодичность = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(16));
							ДатаИмпорта = Читалка.GetDateTime(17);
							ТипПолучателя = V82.Перечисления/*Ссылка*/.ТипыКонтролирующихОрганов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(18));
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
		
		public V82.СправочникиОбъект.ЭлектронныеПредставленияРегламентированныхОтчетов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЭлектронныеПредставленияРегламентированныхОтчетов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Организация = Организация;
			Объект.Получатель = Получатель;
			Объект.ВидОтчета = ВидОтчета;
			Объект.ДатаНачала = ДатаНачала;
			Объект.ДатаОкончания = ДатаОкончания;
			Объект.Комментарий = Комментарий;
			Объект.Периодичность = Периодичность;
			Объект.ДатаИмпорта = ДатаИмпорта;
			Объект.ТипПолучателя = ТипПолучателя;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ЭлектронныеПредставленияРегламентированныхОтчетов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ЭлектронныеПредставленияРегламентированныхОтчетов)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ЭлектронныеПредставленияРегламентированныхОтчетов(УникальныйИдентификатор);
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