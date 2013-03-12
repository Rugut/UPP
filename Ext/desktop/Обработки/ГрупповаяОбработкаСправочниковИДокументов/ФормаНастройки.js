Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:316px;height:163px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:138px;width:316px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять в транзакции',
			style: 'position:absolute;left:8px;top:8px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить изменение реквизитов объектов',
			style: 'position:absolute;left:8px;top:28px;width:263px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеНаСтрокиНеограниченнойДлины',
			text: 'Ограничение на строки неограниченной длины:',
			style: 'position:absolute;left:8px;top:111px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеНаСтрокиНеограниченнойДлины',
			style: 'position:absolute;left:258px;top:111px;width:50px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать все колонки',
			style: 'position:absolute;left:8px;top:48px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по свойствам',
			style: 'position:absolute;left:8px;top:68px;width:263px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по категориям',
			style: 'position:absolute;left:8px;top:88px;width:263px;height:20px;',
		},
	]
});