Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеЗаявление',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Квитанция о приеме заявления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:513px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:506px;',
			height: 506,width: 497,
			items:
			[
				{
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя принятого файла:',
			style: 'position:absolute;left:6px;top:10px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПринятФайла',
			style: 'position:absolute;left:191px;top:10px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время направления файла:',
			style: 'position:absolute;left:6px;top:35px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяНапр',
			style: 'position:absolute;left:191px;top:35px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления отчета:',
			style: 'position:absolute;left:6px;top:160px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:191px;top:160px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:6px;top:60px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:191px;top:60px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование вида документа:',
			style: 'position:absolute;left:6px;top:85px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:191px;top:85px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Дата принятия отчета:',
			style: 'position:absolute;left:6px;top:185px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:191px;top:185px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Рег. номер заявления в НО:',
			style: 'position:absolute;left:6px;top:210px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:191px;top:210px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Номер заявления:',
			style: 'position:absolute;left:6px;top:110px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:191px;top:110px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Дата заявления:',
			style: 'position:absolute;left:6px;top:135px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:191px;top:135px;width:298px;height:19px;',
		},
					]
				},
				{
					title:'Ошибки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'Код ошибки',
					width:'89',
				},
				{
					text:'Описание',
					width:'111',
				},
			]
		},
					]
				},
			]
		},
	]
});