Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаПечатьПакетаДокументовДляПодключения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:216px;height:201px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать пакета документов',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Заявление  на подключение',
			style: 'position:absolute;left:8px;top:8px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Соглашение об оказании услуг',
			style: 'position:absolute;left:8px;top:36px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Лицензия на использование ПО',
			style: 'position:absolute;left:8px;top:64px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сертификат пользователя *',
			style: 'position:absolute;left:8px;top:92px;width:200px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификат',
			text: '* Печать сертификата пользователя доступна после одобрения заявления',
			style: 'position:absolute;left:24px;top:124px;width:184px;height:44px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:116px;width:200px;height:4px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:176px;width:216px;height:25px;',
			dock: 'top',
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