Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				'-',
				{
					text:'Редактировать номер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			items:
			[
				'-',
				{
					text:'Проверить',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Зашифровать и отправить',
				},
				'-',
				{
					text:'Сформировать тексты выгрузки',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата1',
			text: 'от:',
			style: 'position:absolute;left:198px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:93px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:354px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:138px;width:704px;height:258px;',
			height: 258,width: 704,
			items:
			[
				{
					title:'Отчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:704px;height:211px;',
			height: 211,width: 704,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Отчет',
					width:'142',
				},
				{
					text:'Вид',
					width:'41',
				},
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'94',
				},
				{
					text:'Текст',
					width:'45',
				},
				{
					text:'Ссылка',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:19px;width:704px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Снять пометки у всех',
				},
				{
					text:'Текст',
				},
				{
					text:'Пометить все',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:424px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:398px;width:622px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'Янв',
			style: 'position:absolute;left:186px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'I кв',
			style: 'position:absolute;left:243px;top:115px;width:28px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц5',
			text: 'Май',
			style: 'position:absolute;left:304px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц7',
			text: 'Июл',
			style: 'position:absolute;left:363px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц9',
			text: 'III кв',
			style: 'position:absolute;left:419px;top:115px;width:32px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'Ноя',
			style: 'position:absolute;left:482px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'Фев',
			style: 'position:absolute;left:215px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц4',
			text: 'Апр',
			style: 'position:absolute;left:274px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'II кв',
			style: 'position:absolute;left:332px;top:115px;width:28px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц8',
			text: 'Авг',
			style: 'position:absolute;left:393px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'Окт',
			style: 'position:absolute;left:452px;top:115px;width:25px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:8px;top:84px;width:80px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:93px;top:81px;width:60px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'IV кв',
			style: 'position:absolute;left:509px;top:115px;width:32px;height:18px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по коду ИФНС',
			style: 'position:absolute;left:354px;top:33px;width:132px;height:19px;',
		},
	]
});