Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 187,width: 631,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:162px;width:631px;height:25px;',
			items:
			[
				{
					text:'ДействиеОтмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:183px;top:91px;width:313px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:89px;top:6px;width:407px;height:19px;',
		},
	]
});