Ext.define('Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 550,width: 726,
	iconCls: 'bogus',
	title: 'Табель учета рабочего времени',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действия',
				},
				{
					text:'ГрафикиРаботыПоВидамВремени',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие6',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:525px;width:726px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:502px;height:482px;',
			height: 482,width: 502,
			items:
			[
				{
					title:'ОсновнаяПанельДокумента',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:291px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:85px;top:1px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:85px;top:25px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:328px;top:25px;width:174px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:463px;width:415px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:210px;width:502px;height:245px;',
			height: 245,width: 502,
			items:
			[
				{
					title:'ПоДням',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:502px;height:218px;',
			height: 218,width: 502,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Итого',
				},
				{
					text:'День1',
				},
				{
					text:'День2',
				},
				{
					text:'День3',
				},
				{
					text:'День4',
				},
				{
					text:'День5',
				},
				{
					text:'День6',
				},
				{
					text:'День7',
				},
				{
					text:'День8',
				},
				{
					text:'День9',
				},
				{
					text:'День10',
				},
				{
					text:'День11',
				},
				{
					text:'День12',
				},
				{
					text:'День13',
				},
				{
					text:'День14',
				},
				{
					text:'День15',
				},
				{
					text:'День16',
				},
				{
					text:'День17',
				},
				{
					text:'День18',
				},
				{
					text:'День19',
				},
				{
					text:'День20',
				},
				{
					text:'День21',
				},
				{
					text:'День22',
				},
				{
					text:'День23',
				},
				{
					text:'День24',
				},
				{
					text:'День25',
				},
				{
					text:'День26',
				},
				{
					text:'День27',
				},
				{
					text:'День28',
				},
				{
					text:'День29',
				},
				{
					text:'День30',
				},
				{
					text:'День31',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПоСпискуСотрудников',
				},
			]
		},
					]
				},
				{
					title:'ВЦеломЗаПериод',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:502px;height:219px;',
			height: 219,width: 502,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ВидВремени1',
				},
				{
					text:'Дней1',
				},
				{
					text:'Часов1',
				},
				{
					text:'ВидВремени2',
				},
				{
					text:'Дней2',
				},
				{
					text:'Часов2',
				},
				{
					text:'ВидВремени3',
				},
				{
					text:'Дней3',
				},
				{
					text:'Часов3',
				},
				{
					text:'ВидВремени4',
				},
				{
					text:'Дней4',
				},
				{
					text:'Часов4',
				},
				{
					text:'ВидВремени5',
				},
				{
					text:'Дней5',
				},
				{
					text:'Часов5',
				},
				{
					text:'ВидВремени6',
				},
				{
					text:'Дней6',
				},
				{
					text:'Часов6',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:300px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'ПоСпискуСотрудников',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:0px;width:186px;height:24px;',
			items:
			[
				{
					text:'ИзменитьСоставКолонок',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:396px;top:0px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:60px;width:502px;height:128px;',
			height: 128,width: 502,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:46px;top:8px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:46px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:149px;top:98px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:516px;top:33px;width:202px;height:482px;',
			height: 482,width: 202,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:676px;top:0px;width:50px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
	]
});