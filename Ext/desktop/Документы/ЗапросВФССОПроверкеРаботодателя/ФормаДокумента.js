Ext.define('Документы.ЗапросВФССОПроверкеРаботодателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 410,width: 682,
	iconCls: 'bogus',
	title: 'Запрос в ФСС о проверке работодателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:682px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:358px;width:578px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:111px;width:666px;height:241px;',
			height: 241,width: 666,
			items:
			[
				{
					title:'Страхователи',
				},
				{
					title:'ДанныеОрганизации',
				},
				{
					title:'ДанныеОЗастрахованномЛице',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПособия',
			style: 'position:absolute;left:113px;top:83px;width:220px;height:19px;',
		},
	]
});