Ext.define('Справочники.РегламентированныеОтчеты.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:322px;height:306px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа отчетов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:8px;top:53px;width:306px;height:220px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание',
			style: 'position:absolute;left:8px;top:32px;width:306px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:281px;width:322px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});