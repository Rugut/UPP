
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
	///<summary>
	///Список настроек закрытия месяца
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НастройкиЗакрытияМесяца:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("547f291a-e843-4909-ac3d-bd2577d287c0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191745.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*70*/ Наименование {get;set;}
		public DateTime ДатаНачалаДействияНастройки {get;set;}//Начало действия
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		public decimal/*(1)*/ ВариантНастройки {get;set;}//Вариант настройки
		
		public НастройкиЗакрытияМесяца()
		{
		}
		
		public НастройкиЗакрытияМесяца(byte[] УникальныйИдентификатор)
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
					,_Description [Наименование]
					,_Fld2685 [ДатаНачалаДействияНастройки]
					,_Fld2686 [ОтражатьВУправленческомУчете]
					,_Fld2687 [ОтражатьВБухгалтерскомУчете]
					,_Fld2688 [ОтражатьВНалоговомУчете]
					,_Fld2689 [ВариантНастройки]
					From _Reference151(NOLOCK)
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
							Наименование = Читалка.GetString(4);
							ДатаНачалаДействияНастройки = Читалка.GetDateTime(5);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(7))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(8))[0]==1;
							ВариантНастройки = Читалка.GetDecimal(9);
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
		
		public V82.СправочникиОбъект.НастройкиЗакрытияМесяца  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиЗакрытияМесяца();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Наименование = Наименование;
			Объект.ДатаНачалаДействияНастройки = ДатаНачалаДействияНастройки;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ВариантНастройки = ВариантНастройки;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.НастройкиЗакрытияМесяца ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.НастройкиЗакрытияМесяца)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.НастройкиЗакрытияМесяца(УникальныйИдентификатор);
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