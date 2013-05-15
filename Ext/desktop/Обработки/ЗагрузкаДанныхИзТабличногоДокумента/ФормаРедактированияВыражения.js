Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаРедактированияВыражения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма редактирования выражения',
	
	items:
	[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НадписьТекстВыражения',
			style: 'position:absolute;left:8px;top:8px;width:702px;height:105px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:718px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});