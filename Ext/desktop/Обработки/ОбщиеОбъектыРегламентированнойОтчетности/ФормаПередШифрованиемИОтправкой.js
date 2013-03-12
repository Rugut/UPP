Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаПередШифрованиемИОтправкой',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:116px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Шифрование и отправка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:378px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Продолжить',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:362px;height:74px;',
			height: 74,width: 362,
			items:
			[
				{
					title:'Описание',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Нажмите кнопку "Продолжить" для того, чтобы сохранить файлы 
на диске и передать управление программному комплексу 
"Спринтер" компании "Такском".',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:74px;',
		},
					]
				},
			]
		},
	]
});