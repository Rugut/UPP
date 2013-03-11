Ext.define('Справочники.НалоговыеОрганы.ФормаЗагрузкиКлассификатора',
	{
	extend: 'Ext.window.Window',
	height: 164,width: 602,
	iconCls: 'bogus',
	title: 'Импорт классификатора СОУН',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:602px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'Импортировать',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Каталог',
			style: 'position:absolute;left:66px;top:10px;width:528px;height:19px;',
		},
	]
});