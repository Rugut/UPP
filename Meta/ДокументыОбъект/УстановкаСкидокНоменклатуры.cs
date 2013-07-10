
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class УстановкаСкидокНоменклатуры:ДокументОбъект
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
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыСкидок ВидСкидки {get;set;}//Вид скидки
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаНачала {get;set;}//Дата начала действия скидки
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания действия скидки
		[DataMember]
		[ProtoMember(15)]
		public bool ДляВсейНоменклатуры {get;set;}//Для всей номенклатуры
		[DataMember]
		[ProtoMember(16)]
		public bool ДляВсехПолучателей {get;set;}//Для всех получателей
		[DataMember]
		[ProtoMember(17)]
		public object ЗначениеУсловия {get;set;}//Значение условия
		[DataMember]
		[ProtoMember(18)]
		public DateTime ОбщееВремяНачала {get;set;}//Общее время начала
		[DataMember]
		[ProtoMember(19)]
		public DateTime ОбщееВремяОкончания {get;set;}//Общее время окончания
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(15.2)*/ ОграничениеСкидкиНаценки {get;set;}//Ограничение скидки, наценки
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(5.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки, наценки
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ТипыСкидокНаценок ТипСкидкиНаценки {get;set;}//Тип скидки наценки
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки Условие {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public bool ПоДнямНедели {get;set;}//По дням недели
		[DataMember]
		[ProtoMember(25)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийУстановкаСкидокНоменклатуры ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Качество Качество {get;set;}
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
						Insert Into _Document480(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12226
						,_Fld12227RRef
						,_Fld12228RRef
						,_Fld12229RRef
						,_Fld12230
						,_Fld12231
						,_Fld12232
						,_Fld12233
						,_Fld12235
						,_Fld12236
						,_Fld12237
						,_Fld12238
						,_Fld12239RRef
						,_Fld12240RRef
						,_Fld12241
						,_Fld12242RRef
						,_Fld12243RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Комментарий
						,@Ответственный
						,@Валюта
						,@ВидСкидки
						,@ДатаНачала
						,@ДатаОкончания
						,@ДляВсейНоменклатуры
						,@ДляВсехПолучателей
						,@ОбщееВремяНачала
						,@ОбщееВремяОкончания
						,@ОграничениеСкидкиНаценки
						,@ПроцентСкидкиНаценки
						,@ТипСкидкиНаценки
						,@Условие
						,@ПоДнямНедели
						,@ВидОперации
						,@Качество)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document480
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12226	= @Комментарий
						,_Fld12227RRef	= @Ответственный
						,_Fld12228RRef	= @Валюта
						,_Fld12229RRef	= @ВидСкидки
						,_Fld12230	= @ДатаНачала
						,_Fld12231	= @ДатаОкончания
						,_Fld12232	= @ДляВсейНоменклатуры
						,_Fld12233	= @ДляВсехПолучателей
						,_Fld12235	= @ОбщееВремяНачала
						,_Fld12236	= @ОбщееВремяОкончания
						,_Fld12237	= @ОграничениеСкидкиНаценки
						,_Fld12238	= @ПроцентСкидкиНаценки
						,_Fld12239RRef	= @ТипСкидкиНаценки
						,_Fld12240RRef	= @Условие
						,_Fld12241	= @ПоДнямНедели
						,_Fld12242RRef	= @ВидОперации
						,_Fld12243RRef	= @Качество
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВидСкидки", ВидСкидки.Ключ());
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("ДляВсейНоменклатуры", ДляВсейНоменклатуры);
					Команда.Parameters.AddWithValue("ДляВсехПолучателей", ДляВсехПолучателей);
					Команда.Parameters.AddWithValue("ОбщееВремяНачала", ОбщееВремяНачала);
					Команда.Parameters.AddWithValue("ОбщееВремяОкончания", ОбщееВремяОкончания);
					Команда.Parameters.AddWithValue("ОграничениеСкидкиНаценки", ОграничениеСкидкиНаценки);
					Команда.Parameters.AddWithValue("ПроцентСкидкиНаценки", ПроцентСкидкиНаценки);
					Команда.Parameters.AddWithValue("Условие", Условие.Ключ());
					Команда.Parameters.AddWithValue("ПоДнямНедели", ПоДнямНедели);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
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
					Команда.CommandText = @"Delete _Document480
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}