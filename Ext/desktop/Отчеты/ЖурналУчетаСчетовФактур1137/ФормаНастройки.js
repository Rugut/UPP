Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:631px;height:187px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[{
		xtype: 'form',
		items:
		[
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентДляОтбора',
			width: 313,
			height: 19,
			style: 'position:absolute;left:183px;top:91px;width:313px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Руководитель',
			width: 407,
			height: 19,
			style: 'position:absolute;left:89px;top:6px;width:407px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:6px;width:78px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Формировать отчет в соответствии с правилами ведения журнала учета полученных и выставленных счетов-фактур',
			style: 'position:absolute;left:8px;top:43px;width:615px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать дополнительные настройки',
			style: 'position:absolute;left:8px;top:67px;width:405px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:162px;width:631px;height:25px;',
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