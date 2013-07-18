
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
	public partial class ПерепискаСКонтролирующимиОрганами:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("46554297-cebf-46ff-9713-4320b333abcd");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011951.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.ТипыПерепискиСКонтролирующимиОрганами Тип {get;set;}
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус {get;set;}
		///<summary>
		///Вспомогательное поле для реализации отбора по организации
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public object Отправитель {get;set;}
		public object Получатель {get;set;}
		public string/*(0)*/ Содержание {get;set;}
		public DateTime ДатаСообщения {get;set;}//Дата сообщения
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		public string/*(36)*/ Идентификатор {get;set;}
		public string/*(36)*/ ИдентификаторОснования {get;set;}//Идентификатор основания
		public bool Ретроконверсия {get;set;}
		
		public ПерепискаСКонтролирующимиОрганами()
		{
		}
		
		public ПерепискаСКонтролирующимиОрганами(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ПерепискаСКонтролирующимиОрганами(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld23678RRef [Тип]
					,_Fld23679RRef [Статус]
					,_Fld23680RRef [Организация]
					,_Fld23681_TYPE [Отправитель_Тип],_Fld23681_RRRef [Отправитель],_Fld23681_RTRef [Отправитель_Вид]
					,_Fld23682_TYPE [Получатель_Тип],_Fld23682_RRRef [Получатель],_Fld23682_RTRef [Получатель_Вид]
					,_Fld23683 [Содержание]
					,_Fld23684 [ДатаСообщения]
					,_Fld23685 [ДатаОтправки]
					,_Fld23686 [Идентификатор]
					,_Fld23687 [ИдентификаторОснования]
					,_Fld23688 [Ретроконверсия]
					From _Reference23118(NOLOCK)
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
								Тип = V82.Перечисления/*Ссылка*/.ТипыПерепискиСКонтролирующимиОрганами.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
								Статус = V82.Перечисления/*Ссылка*/.СтатусыПисем.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(8),Глубина+1);
								Содержание = Читалка.GetString(15);
								ДатаСообщения = Читалка.GetDateTime(16);
								ДатаОтправки = Читалка.GetDateTime(17);
								Идентификатор = Читалка.GetString(18);
								ИдентификаторОснования = Читалка.GetString(19);
								Ретроконверсия = ((byte[])Читалка.GetValue(20))[0]==1;
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
		
		public V82.СправочникиОбъект.ПерепискаСКонтролирующимиОрганами  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПерепискаСКонтролирующимиОрганами();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Тип = Тип;
			Объект.Статус = Статус;
			Объект.Организация = Организация;
			Объект.Отправитель = Отправитель;
			Объект.Получатель = Получатель;
			Объект.Содержание = Содержание;
			Объект.ДатаСообщения = ДатаСообщения;
			Объект.ДатаОтправки = ДатаОтправки;
			Объект.Идентификатор = Идентификатор;
			Объект.ИдентификаторОснования = ИдентификаторОснования;
			Объект.Ретроконверсия = Ретроконверсия;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ПерепискаСКонтролирующимиОрганами ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ПерепискаСКонтролирующимиОрганами)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ПерепискаСКонтролирующимиОрганами(УникальныйИдентификатор);
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