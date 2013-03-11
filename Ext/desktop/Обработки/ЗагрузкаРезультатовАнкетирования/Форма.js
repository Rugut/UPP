Ext.define('Обработки.ЗагрузкаРезультатовАнкетирования.Форма',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 573,
	iconCls: 'bogus',
	title: 'Загрузка результатов анкетирования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:557px;height:377px;',
			height: 377,width: 557,
			items:
			[
				{
					title:'ЗагрузкаИзПочты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:222px;height:151px;',
			height: 151,width: 222,
			columns:
			[
				{
					text:'Тема',
				},
				{
					text:'ОбъектЗагрузки',
				},
				{
					text:'Анкета',
				},
				{
					text:'Опрос',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:256px;width:222px;height:93px;',
			height: 93,width: 222,
			columns:
			[
				{
					text:'Вложение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:234px;top:281px;width:315px;height:68px;',
			height: 68,width: 315,
			columns:
			[
				{
					text:'Вопрос',
				},
				{
					text:'Ответ',
				},
				{
					text:'РазвернутыйОтвет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:74px;width:222px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СнятьВсе1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Обновить1',
				},
				{
					text:'ВыбратьВсе1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:245px;top:26px;width:304px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:256px;width:315px;height:25px;',
			items:
			[
				{
					text:'HTML',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:245px;top:48px;width:304px;height:19px;',
		},
					]
				},
				{
					title:'ЗагрузкаИзКаталога',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:129px;width:273px;height:222px;',
			height: 222,width: 273,
			columns:
			[
				{
					text:'ИмяФайла',
				},
				{
					text:'Анкета',
				},
				{
					text:'ОбъектЗагрузки',
				},
				{
					text:'Опрос',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:65px;top:5px;width:484px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:105px;width:273px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлагУдаления',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыбратьВсе',
				},
				{
					text:'Выполнить1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПредПросмотр',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:129px;width:264px;height:221px;',
			height: 221,width: 264,
			columns:
			[
				{
					text:'Вопрос',
				},
				{
					text:'Ответ',
				},
				{
					text:'РазвернутыйОтвет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:285px;top:105px;width:264px;height:24px;',
			items:
			[
				{
					text:'HTML',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АнкетаОтбораФайлы',
			style: 'position:absolute;left:245px;top:44px;width:304px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
	]
});