Ext.define('Отчеты.КнигаПродаж1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 229,width: 524,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:204px;width:524px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'ДействиеОтмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:183px;top:111px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:89px;top:29px;width:324px;height:19px;',
		},
	]
});