Ext.define('Обработки.ТОНастройка.ФормаОбновленияОбработок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:981px;height:553px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обновление обработок обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:981px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выбрать все',
				},
				{
					text:'Снять все',
				},
				'-',
				{
					text:'Обновить список обработок с сайта',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:528px;width:981px;height:25px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:965px;height:248px;',
			height: 248,width: 965,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Имя файла обработки обслуживания',
					width:'224',
				},
				{
					text:'Текущее наименование',
					width:'373',
				},
				{
					text:'Новое наименование',
					width:'373',
				},
				{
					text:'Текущая версия',
					width:'108',
				},
				{
					text:'Новая версия',
					width:'108',
				},
				{
					text:'Текущая версия API',
					width:'122',
				},
				{
					text:'Новая версия API',
					width:'111',
				},
				{
					text:'Подсказка',
					width:'315',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтараяОО',
			text: 'Старая',
			style: 'position:absolute;left:14px;top:374px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущаяОО',
			text: 'Текущая',
			style: 'position:absolute;left:14px;top:398px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоваяОО',
			text: 'Новая',
			style: 'position:absolute;left:14px;top:422px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеобновляемаяОО',
			text: 'Необновляемая',
			style: 'position:absolute;left:14px;top:470px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавляемаяОО',
			text: 'Добавляемая',
			style: 'position:absolute;left:14px;top:446px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеСтараяОО',
			text: '- значение "Версия" или "Версия API" обработки обслуживания в справочнике ниже, чем значение обработки обслуживания с сайта. Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:374px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеТекущаяОО',
			text: '- обработка обслуживания в справочнике и обработка обслуживания на сайте имеют одинаковые значения "Версия" и "Версия API". Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:398px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНоваяОО',
			text: '- значение "Версия" и "Версия API" обработки обслуживания в справочнике выше, чем значение обработки обслуживания с сайта. Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:422px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеДобавляемаяОО',
			text: '- обработка обслуживания, доступная на сайте, отсутствует в справочнике. Доступно добавление с сайта.',
			style: 'position:absolute;left:118px;top:446px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНеобновляемаяОО',
			text: '- для обработки обслуживания в справочнике отсутствует обновление на сайте.  Не доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:470px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЖирныйШрифт',
			text: 'Жирный шрифт',
			style: 'position:absolute;left:14px;top:494px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНеобновляемаяОО1',
			text: '- обработки обслуживания, которые буду обновлены (добавлены) в справочнике.',
			style: 'position:absolute;left:118px;top:494px;width:849px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать отсутствующие в справочнике обработки обслуживания',
			style: 'position:absolute;left:14px;top:305px;width:373px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать текущие, новые и необновляемые обработки обслуживания',
			style: 'position:absolute;left:392px;top:305px;width:390px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проверять наличие обновлений обработок обслуживания при запуске',
			style: 'position:absolute;left:14px;top:329px;width:381px;height:15px;',
		},
	]
});