
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РегламентированныйОтчет:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool Проведен {get;set;}
		///<summary>
		///(Общ) Имя встроенной или имя файла внешней обработки
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(254)*/ ИсточникОтчета {get;set;}//Источник отчета
		///<summary>
		///(Общ) Наименование регламентированного отчета
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(100)*/ НаименованиеОтчета {get;set;}//Наименование отчета
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		///<summary>
		///(Общ) Дата подписи
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаПодписи {get;set;}//Дата подписи
		///<summary>
		///(Общ) Периодичность представления отчета
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.ПорядкиОкругленияОтчетности ЕдиницаИзмерения {get;set;}//Единица измерения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(1)*/ ТочностьЕдиницыИзмерения {get;set;}//Точность единицы измерения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ ВыбраннаяФорма {get;set;}//Выбранная форма
		///<summary>
		///(Общ) Сохраненные данные отчета
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public ХранилищеЗначения ДанныеОтчета {get;set;}//Данные отчета
		///<summary>
		///(Общ) Дерево со списком настроек страниц
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public ХранилищеЗначения ДеревоНастройкиСтраниц {get;set;}//Дерево настройки страниц
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.ВидыОтчетности ВидОтчетности {get;set;}//Вид отчетности
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public string/*(4)*/ КодИМНС {get;set;}//Код ИФНС
		[DataMember]
		[ProtoMember(23)]
		public string/*(4)*/ КодИМНСПосредника {get;set;}//Код ИФНС-посредника
		[DataMember]
		[ProtoMember(24)]
		public string/*(30)*/ ФорматВыгрузки {get;set;}//Формат выгрузки
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(3)*/ Вид {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(16)*/ Период {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public string/*(9)*/ КПП {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document570(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Fld16224
						,_Fld16225
						,_Fld16226RRef
						,_Fld16227
						,_Fld16228
						,_Fld16229
						,_Fld16230RRef
						,_Fld16231RRef
						,_Fld16232
						,_Fld16233
						,_Fld16234
						,_Fld16235
						,_Fld16236RRef
						,_Fld16237
						,_Fld16238
						,_Fld16239
						,_Fld16240
						,_Fld16241
						,_Fld16242
						,_Fld16243)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@ИсточникОтчета
						,@НаименованиеОтчета
						,@Организация
						,@ДатаНачала
						,@ДатаОкончания
						,@ДатаПодписи
						,@Периодичность
						,@ЕдиницаИзмерения
						,@ТочностьЕдиницыИзмерения
						,@ВыбраннаяФорма
						,@ДанныеОтчета
						,@ДеревоНастройкиСтраниц
						,@ВидОтчетности
						,@Комментарий
						,@КодИМНС
						,@КодИМНСПосредника
						,@ФорматВыгрузки
						,@Вид
						,@Период
						,@КПП)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document570
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Fld16224	= @ИсточникОтчета
						,_Fld16225	= @НаименованиеОтчета
						,_Fld16226RRef	= @Организация
						,_Fld16227	= @ДатаНачала
						,_Fld16228	= @ДатаОкончания
						,_Fld16229	= @ДатаПодписи
						,_Fld16230RRef	= @Периодичность
						,_Fld16231RRef	= @ЕдиницаИзмерения
						,_Fld16232	= @ТочностьЕдиницыИзмерения
						,_Fld16233	= @ВыбраннаяФорма
						,_Fld16234	= @ДанныеОтчета
						,_Fld16235	= @ДеревоНастройкиСтраниц
						,_Fld16236RRef	= @ВидОтчетности
						,_Fld16237	= @Комментарий
						,_Fld16238	= @КодИМНС
						,_Fld16239	= @КодИМНСПосредника
						,_Fld16240	= @ФорматВыгрузки
						,_Fld16241	= @Вид
						,_Fld16242	= @Период
						,_Fld16243	= @КПП
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("ИсточникОтчета", ИсточникОтчета);
					Команда.Parameters.AddWithValue("НаименованиеОтчета", НаименованиеОтчета);
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("ДатаПодписи", ДатаПодписи);
					Команда.Parameters.AddWithValue("Периодичность", Периодичность.Ключ());
					Команда.Parameters.AddWithValue("ЕдиницаИзмерения", ЕдиницаИзмерения.Ключ());
					Команда.Parameters.AddWithValue("ТочностьЕдиницыИзмерения", ТочностьЕдиницыИзмерения);
					Команда.Parameters.AddWithValue("ВыбраннаяФорма", ВыбраннаяФорма);
					Команда.Parameters.AddWithValue("ДанныеОтчета",new byte[0]);
					Команда.Parameters.AddWithValue("ДеревоНастройкиСтраниц",new byte[0]);
					Команда.Parameters.AddWithValue("ВидОтчетности", ВидОтчетности.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КодИМНС", КодИМНС);
					Команда.Parameters.AddWithValue("КодИМНСПосредника", КодИМНСПосредника);
					Команда.Parameters.AddWithValue("ФорматВыгрузки", ФорматВыгрузки);
					Команда.Parameters.AddWithValue("Вид", Вид);
					Команда.Parameters.AddWithValue("Период", Период);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document570
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}