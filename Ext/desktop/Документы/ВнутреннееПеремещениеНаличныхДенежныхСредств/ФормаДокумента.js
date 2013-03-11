Ext.define('Документы.ВнутреннееПеремещениеНаличныхДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 339,width: 346,
	iconCls: 'bogus',
	title: 'Внутреннее перемещение наличных денежных средств',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:118px;top:91px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаПолучатель',
			style: 'position:absolute;left:118px;top:156px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:118px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:118px;top:211px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:118px;top:249px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:118px;top:276px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:314px;width:346px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:224px;top:33px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:118px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияПолучатель',
			style: 'position:absolute;left:118px;top:124px;width:220px;height:19px;',
		},
	]
});