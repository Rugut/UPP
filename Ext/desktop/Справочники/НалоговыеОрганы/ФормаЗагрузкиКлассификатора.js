Ext.define('Справочники.НалоговыеОрганы.ФормаЗагрузкиКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Импорт классификатора СОУН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКаталог',
			text: 'Каталог:',
			style: 'position:absolute;left:8px;top:12px;width:56px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Каталог',
			style: 'position:absolute;left:66px;top:10px;width:528px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Настройки импорта',
			style: 'position:absolute;left:66px;top:87px;width:520px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'не обновлять комментарий',
			style: 'position:absolute;left:66px;top:111px;width:160px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер версии:',
			style: 'position:absolute;left:66px;top:38px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата версии:',
			style: 'position:absolute;left:66px;top:59px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВерсии',
			text: '',
			style: 'position:absolute;left:154px;top:38px;width:83px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВерсии',
			text: '',
			style: 'position:absolute;left:154px;top:59px;width:83px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:585px;top:29px;width:2px;height:38px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:241px;top:45px;width:345px;height:3px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:241px;top:66px;width:345px;height:3px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:602px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Импортировать',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});