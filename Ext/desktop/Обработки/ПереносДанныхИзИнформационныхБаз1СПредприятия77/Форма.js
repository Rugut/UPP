Ext.define('Обработки.ПереносДанныхИзИнформационныхБаз1СПредприятия77.Форма',
	{
	extend: 'Ext.window.Window',
	height: 410,width: 610,
	iconCls: 'bogus',
	title: 'Перенос данных из информационных баз 1С:Предприятия 7.7',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:594px;height:394px;',
			height: 394,width: 594,
			items:
			[
				{
					title:'СтраницаНачало',
					items:
					[
					]
				},
				{
					title:'ИБСтраница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:138px;top:78px;width:456px;height:96px;',
			height: 96,width: 456,
			columns:
			[
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Далее',
			text: 'Далее',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ВНачало',
			text: 'В начало',
			style: 'position:absolute;left:382px;top:372px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'ФСтраница1',
					items:
					[
		{
			xtype: 'button',
			name: 'Далее2',
			text: 'Далее',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:382px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаВыгруженныхДанных',
			style: 'position:absolute;left:138px;top:73px;width:456px;height:19px;',
		},
					]
				},
				{
					title:'ИБСтраница2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:138px;top:269px;width:456px;height:125px;',
			height: 125,width: 456,
			items:
			[
				{
					title:'СтраницаОшибка',
					items:
					[
		{
			xtype: 'button',
			name: 'ИБДалееКонОшибка',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБПовторить1',
			text: 'Повторить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаУспехПроф',
					items:
					[
		{
			xtype: 'button',
			name: 'ИБВНачало2',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБПовторить2',
			text: 'Продолжить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБДалееКонПроф',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаУспехБазовая',
					items:
					[
		{
			xtype: 'button',
			name: 'ИБДалееКонБазовая',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаПроцесс',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ФСтраница2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:138px;top:269px;width:456px;height:125px;',
			height: 125,width: 456,
			items:
			[
				{
					title:'СтраницаОшибка',
					items:
					[
		{
			xtype: 'button',
			name: 'ФВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить1',
			text: 'Повторить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонОшибка',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаУспехПроф',
					items:
					[
		{
			xtype: 'button',
			name: 'ФНачало2',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить2',
			text: 'Продолжить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонПроф',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаУспехБазовая',
					items:
					[
		{
			xtype: 'button',
			name: 'ФДалееКонБазовая',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'СтраницаПроцесс',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ИБСтраница3',
					items:
					[
		{
			xtype: 'button',
			name: 'ФВНачало2',
			text: 'В начало',
			style: 'position:absolute;left:138px;top:322px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить3',
			text: 'Повторить',
			style: 'position:absolute;left:248px;top:322px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонПомощник',
			text: 'Завершить',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПерейтиКЗагрузкеФайла',
			text: 'Перейти к загрузке данных из файла',
			style: 'position:absolute;left:358px;top:322px;width:227px;height:22px;',
		},
					]
				},
			]
		},
	]
});