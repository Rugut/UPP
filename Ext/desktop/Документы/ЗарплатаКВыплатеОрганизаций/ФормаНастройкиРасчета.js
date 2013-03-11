Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчета',
	{
	extend: 'Ext.window.Window',
	height: 173,width: 352,
	iconCls: 'bogus',
	title: 'Настройка расчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:352px;height:25px;',
			items:
			[
				{
					text:'Пересчитать',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:336px;height:93px;',
			height: 93,width: 336,
			items:
			[
				{
					title:'ПлановыйАванс',
				},
				{
					title:'АвансЗаПервуюПоловинуМесяца',
				},
				{
					title:'Зарплата',
				},
				{
					title:'Дивиденды',
				},
				{
					title:'ПрочиеВыплаты',
				},
				{
					title:'ПрочиеВыплатыБезУдержаний',
				},
			]
		},
	]
});