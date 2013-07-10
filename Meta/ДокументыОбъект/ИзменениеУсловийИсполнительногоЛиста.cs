
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИзменениеУсловийИсполнительногоЛиста:ДокументОбъект
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
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.ДокументыСсылка.ИсполнительныйЛист ИсполнительныйЛист {get;set;}//Исполнительный лист
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыДействияСНачислением Действие {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаИзменения {get;set;}//Дата изменения
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаУдержанийПоИЛ СпособРасчетаУдержания {get;set;}//Способ расчета удержания
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.2)*/ Размер {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.2)*/ Предел {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ПрожиточныеМинимумы ПрожиточныйМинимум {get;set;}//Прожиточный минимум
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(5.2)*/ ПроцентПочтовогоСбора {get;set;}//Процент почтового сбора
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ТарифыПочтовогоСбора Тариф {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.СпособыПеречисленийПоИсполнительномуЛисту СпособПеречисленияПоИсполнительномуЛисту {get;set;}//Способ перечисления по исполнительному листу
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ТарифыБанковНаДенежныеПереводы ТарифБанкаНаДенежныеПереводы {get;set;}//Тариф банка на денежные переводы
		[DataMember]
		[ProtoMember(23)]
		public bool ПочтовыйСборРассчитыватьПроцентом {get;set;}//Почтовый сбор рассчитывать процентом
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ Комментарий {get;set;}
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
						Insert Into _Document23151(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld24367RRef
						,_Fld24368RRef
						,_Fld24369RRef
						,_Fld24370RRef
						,_Fld24371
						,_Fld24372
						,_Fld24373RRef
						,_Fld24374
						,_Fld24375
						,_Fld24376RRef
						,_Fld24377
						,_Fld24378RRef
						,_Fld24379RRef
						,_Fld24380RRef
						,_Fld24381
						,_Fld24382RRef
						,_Fld24383)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Физлицо
						,@Организация
						,@ИсполнительныйЛист
						,@Действие
						,@ДатаИзменения
						,@ДатаОкончания
						,@СпособРасчетаУдержания
						,@Размер
						,@Предел
						,@ПрожиточныйМинимум
						,@ПроцентПочтовогоСбора
						,@Тариф
						,@СпособПеречисленияПоИсполнительномуЛисту
						,@ТарифБанкаНаДенежныеПереводы
						,@ПочтовыйСборРассчитыватьПроцентом
						,@Ответственный
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23151
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld24367RRef	= @Физлицо
						,_Fld24368RRef	= @Организация
						,_Fld24369RRef	= @ИсполнительныйЛист
						,_Fld24370RRef	= @Действие
						,_Fld24371	= @ДатаИзменения
						,_Fld24372	= @ДатаОкончания
						,_Fld24373RRef	= @СпособРасчетаУдержания
						,_Fld24374	= @Размер
						,_Fld24375	= @Предел
						,_Fld24376RRef	= @ПрожиточныйМинимум
						,_Fld24377	= @ПроцентПочтовогоСбора
						,_Fld24378RRef	= @Тариф
						,_Fld24379RRef	= @СпособПеречисленияПоИсполнительномуЛисту
						,_Fld24380RRef	= @ТарифБанкаНаДенежныеПереводы
						,_Fld24381	= @ПочтовыйСборРассчитыватьПроцентом
						,_Fld24382RRef	= @Ответственный
						,_Fld24383	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ИсполнительныйЛист", ИсполнительныйЛист.Ссылка);
					Команда.Parameters.AddWithValue("Действие", Действие.Ключ());
					Команда.Parameters.AddWithValue("ДатаИзменения", ДатаИзменения);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("СпособРасчетаУдержания", СпособРасчетаУдержания.Ключ());
					Команда.Parameters.AddWithValue("Размер", Размер);
					Команда.Parameters.AddWithValue("Предел", Предел);
					Команда.Parameters.AddWithValue("ПроцентПочтовогоСбора", ПроцентПочтовогоСбора);
					Команда.Parameters.AddWithValue("СпособПеречисленияПоИсполнительномуЛисту", СпособПеречисленияПоИсполнительномуЛисту.Ключ());
					Команда.Parameters.AddWithValue("ПочтовыйСборРассчитыватьПроцентом", ПочтовыйСборРассчитыватьПроцентом);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document23151
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}