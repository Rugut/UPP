Ext.define('Справочники.НормативыОбслуживанияОС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:404px;height:454px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Нормативы обслуживания ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:314px;top:57px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:356px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Родитель:',
			style: 'position:absolute;left:6px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:6px;top:402px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:402px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Состояние:',
			style: 'position:absolute;left:6px;top:130px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:92px;top:130px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:215px;top:130px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:316px;top:130px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Обслуживание:',
			style: 'position:absolute;left:6px;top:84px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Услуга',
			style: 'position:absolute;left:92px;top:84px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Периодичность:',
			style: 'position:absolute;left:18px;top:178px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьОбслуживания',
			style: 'position:absolute;left:136px;top:178px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Количество периодов:',
			style: 'position:absolute;left:18px;top:202px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:136px;top:202px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Параметр выработки:',
			style: 'position:absolute;left:18px;top:226px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработки',
			style: 'position:absolute;left:136px;top:226px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Значение:',
			style: 'position:absolute;left:18px;top:250px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеПараметраВыработкиОС',
			style: 'position:absolute;left:136px;top:250px;width:85px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:293px;width:390px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:317px;width:390px;height:80px;',
			height: 80,width: 390,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'100',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'220',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НормативыОбслуживанияОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'ОсновноеСредство',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:404px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:404px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Количество:',
			style: 'position:absolute;left:6px;top:107px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:92px;top:107px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ЕдиницаПараметраВыработки',
			text: 'ЕдиницаПараметраВыработки',
			style: 'position:absolute;left:225px;top:250px;width:90px;height:19px;text-align:left;',
		},
	]
});