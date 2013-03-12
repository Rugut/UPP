Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:631px;height:187px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:162px;width:631px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:32px;top:115px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту:',
			style: 'position:absolute;left:32px;top:91px;width:149px;height:19px;',
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
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:6px;width:78px;height:19px;',
		},
	]
});