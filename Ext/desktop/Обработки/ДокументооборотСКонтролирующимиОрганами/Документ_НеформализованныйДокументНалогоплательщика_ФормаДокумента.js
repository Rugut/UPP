Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:591px;height:476px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:57px;width:477px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Подготовить к отправке и подписать',
				},
				'-',
				{
					text:'Отправить',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Показать циклы обмена, связанные с документом',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Подготовить к отправке',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:451px;width:591px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:33px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:251px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:220px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип:',
			style: 'position:absolute;left:8px;top:134px;width:95px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:575px;height:291px;',
			height: 291,width: 575,
			items:
			[
				{
					title:'Текст',
					items:
					[
		{
			xtype: 'label',
			name: 'ИмяДокумента',
			text: '',
			style: 'position:absolute;left:97px;top:7px;width:430px;height:18px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Содержимое',
			style: 'position:absolute;left:0px;top:28px;width:575px;height:263px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТема',
			text: 'Тема (имя файла):',
			style: 'position:absolute;left:0px;top:7px;width:95px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тема',
			style: 'position:absolute;left:98px;top:4px;width:426px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:526px;top:0px;width:49px;height:25px;',
			items:
			[
				{
					text:'Загрузить текст',
				},
				{
					text:'Выгрузить текст',
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:526px;top:0px;width:49px;height:25px;',
			items:
			[
				{
					text:'Загрузить',
				},
				{
					text:'Выгрузить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Документ:',
			style: 'position:absolute;left:0px;top:7px;width:95px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Получатель:',
			style: 'position:absolute;left:8px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрацияВИФНС',
			style: 'position:absolute;left:106px;top:81px;width:477px;height:19px;',
		},
	]
});