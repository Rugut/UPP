Ext.define('Документы.ПриемНаРаботуВОрганизацию.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 482,width: 690,
	iconCls: 'bogus',
	title: 'Прием на работу в организацию',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:430px;width:586px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:457px;width:422px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:462px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:674px;height:300px;',
			height: 300,width: 674,
			items:
			[
				{
					title:'Работники',
				},
				{
					title:'Начисления',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:469px;top:391px;width:83px;height:33px;',
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
			style: 'position:absolute;left:553px;top:391px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:268px;height:25px;',
			items:
			[
				{
					text:'ВесьДокумент',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});