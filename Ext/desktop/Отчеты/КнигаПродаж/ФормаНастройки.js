Ext.define('Отчеты.КнигаПродаж.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:599px;height:168px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:32px;top:116px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту:',
			style: 'position:absolute;left:32px;top:92px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:183px;top:92px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Скрыть колонки по ставке 20%',
			style: 'position:absolute;left:8px;top:6px;width:178px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Формировать отчет в соответствии с правилами ведения книги продаж',
			style: 'position:absolute;left:8px;top:44px;width:405px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать дополнительные настройки',
			style: 'position:absolute;left:8px;top:68px;width:405px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:143px;width:599px;height:25px;',
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