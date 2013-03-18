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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:602px;height:25px;',
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
		{
			xtype: 'label',
			name: 'НадписьКаталог',
			text: 'Каталог:',
			style: 'position:absolute;left:8px;top:12px;width:56px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Каталог',
			style: 'position:absolute;left:66px;top:10px;width:528px;height:19px;',
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
	]
});