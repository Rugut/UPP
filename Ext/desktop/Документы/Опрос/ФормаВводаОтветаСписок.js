Ext.define('Документы.Опрос.ФормаВводаОтветаСписок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:392px;height:626px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:601px;width:392px;height:25px;',
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
		{
			xtype: 'radio',
			boxLabel: 'Переключатель',
			style: 'position:absolute;left:8px;top:8px;width:376px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:32px;width:376px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазвернутыйОтвет',
			text: 'Развернутый ответ:',
			style: 'position:absolute;left:8px;top:56px;width:376px;height:19px;',
		},
	]
});