Ext.define('Отчеты.КнигаПокупок.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 168,width: 599,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:143px;width:599px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:183px;top:92px;width:230px;height:19px;',
		},
	]
});