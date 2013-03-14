Ext.define('Отчеты.ОтчетПоДаннымКонтрагента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по данным контрагента',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:810px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НачОтчета',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:7px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:62px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'по контрагенту:',
			style: 'position:absolute;left:144px;top:7px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентОтчета',
			style: 'position:absolute;left:234px;top:7px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:35px;width:794px;height:418px;',
			height: 418,width: 794,
			items:
			[
				{
					title:'Отчет',
				},
				{
					title:'Настройка формы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить конт.инф. контактных лиц',
			style: 'position:absolute;left:6px;top:377px;width:205px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:780px;height:24px;',
			items:
			[
				{
					text:'Снять флажки',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
			]
		},
					]
				},
			]
		},
	]
});