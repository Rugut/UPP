Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 578,width: 720,
	iconCls: 'bogus',
	title: 'Начисление зарплаты сотрудникам организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:510px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:610px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:510px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:526px;width:627px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Действие4',
				},
				{
					text:'ПолныйРасчет',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УДФОткрыть',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'РасчетНачислений',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РасчетНДФЛ',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Показатели',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПогашениеЗаймов',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'РасчетУдержаний',
				},
				{
					text:'Действие',
				},
				{
					text:'СоздатьЗарплатаКВыплатеКасса',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Операция',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:553px;width:474px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:158px;width:704px;height:231px;',
			height: 231,width: 704,
			items:
			[
				{
					title:'СтраницаОсновныеНачисления',
				},
				{
					title:'СтраницаДоговорыНаВыполнениеРабот',
				},
				{
					title:'СтраницаДополнительныеНачисления',
				},
				{
					title:'СтраницаЗаймы',
				},
				{
					title:'СтраницаНДФЛ',
				},
				{
					title:'СтраницаУдержания',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:110px;top:33px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:510px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:414px;width:704px;height:75px;',
			height: 75,width: 704,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисления',
			style: 'position:absolute;left:110px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:130px;width:84px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаНачала',
			style: 'position:absolute;left:110px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаОкончания',
			style: 'position:absolute;left:222px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:553px;width:246px;height:25px;',
			items:
			[
				{
					text:'ВесьДокумент',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
				{
					text:'СписокСотрудников',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:500px;top:492px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:583px;top:492px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});