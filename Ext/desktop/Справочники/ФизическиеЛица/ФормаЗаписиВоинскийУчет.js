Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиВоинскийУчет',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 430,
	iconCls: 'bogus',
	title: 'Воинский учет',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:322px;top:324px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтношениеКВоинскойОбязанности',
			style: 'position:absolute;left:202px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтношениеКВоинскомуУчету',
			style: 'position:absolute;left:202px;top:198px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Годность',
			style: 'position:absolute;left:322px;top:126px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Звание',
			style: 'position:absolute;left:202px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗабронированОрганизацией',
			style: 'position:absolute;left:202px;top:289px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Военкомат',
			style: 'position:absolute;left:88px;top:150px;width:334px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВУС',
			style: 'position:absolute;left:88px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:430px;height:25px;',
			items:
			[
				{
					text:'КнопкаИстория',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительИстория',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗапаса',
			style: 'position:absolute;left:202px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состав',
			style: 'position:absolute;left:202px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКомандыПартии',
			style: 'position:absolute;left:202px;top:242px;width:220px;height:19px;',
		},
	]
});