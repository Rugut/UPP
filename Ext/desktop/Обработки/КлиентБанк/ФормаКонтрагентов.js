Ext.define('Обработки.КлиентБанк.ФормаКонтрагентов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:301px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Клиент банка: Создание ненайденных объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:384px;height:25px;',
			items:
			[
				{
					text:'Создать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:26px;width:368px;height:221px;',
			height: 221,width: 368,
			columns:
			[
				{
					text:'Контрагент: р/счет, договор',
					width:'196',
				},
				{
					text:'',
					width:'180',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:1px;width:97px;height:24px;',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все пометки',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать форму контрагента после записи',
			style: 'position:absolute;left:8px;top:247px;width:327px;height:21px;',
		},
	]
});