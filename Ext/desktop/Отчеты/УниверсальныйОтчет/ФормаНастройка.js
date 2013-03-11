Ext.define('Отчеты.УниверсальныйОтчет.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 500,width: 700,
	iconCls: 'bogus',
	title: 'Настройки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			items:
			[
				{
					text:'РазделительСформировать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:459px;',
			height: 459,width: 684,
			items:
			[
				{
					title:'СтраницаОбщие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:119px;width:670px;height:310px;',
			height: 310,width: 670,
			columns:
			[
				{
					text:'КолонкаПредставление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:95px;width:670px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'Действие2',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:259px;height:19px;',
			height: 19,width: 259,
			items:
			[
				{
					title:'СтраницаПроизвольныйПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаНаДату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаГруппировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:320px;height:399px;',
			height: 399,width: 320,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:356px;top:30px;width:320px;height:399px;',
			height: 399,width: 320,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:320px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:356px;top:6px;width:320px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:329px;top:30px;width:24px;height:399px;',
			items:
			[
				{
					text:'ДействиеПеренестиВИзмеренияКолонок',
				},
				{
					text:'ДействиеПеренестиВИзмеренияСтрок',
				},
			]
		},
					]
				},
				{
					title:'СтраницаИнтервалыГруппировок',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:48px;width:670px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:670px;height:357px;',
			height: 357,width: 670,
			columns:
			[
				{
					text:'ВГраница',
				},
				{
					text:'Название',
				},
			]
		},
					]
				},
				{
					title:'СтраницаОтборы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаДополнительныеПоля',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'КолонкаРазмещение',
				},
				{
					text:'КолонкаПоложение',
				},
			]
		},
					]
				},
				{
					title:'СтраницаСортировка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:399px;',
			height: 399,width: 670,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
				},
			]
		},
					]
				},
				{
					title:'СтраницаОформление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:93px;width:670px;height:336px;',
			height: 336,width: 670,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Области',
				},
				{
					text:'Отбор',
				},
				{
					text:'Оформление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:69px;width:670px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:214px;height:149px;',
			height: 149,width: 214,
			columns:
			[
				{
					text:'КолонкаПредставление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:214px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:317px;width:684px;height:150px;',
			height: 150,width: 684,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:293px;width:684px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			items:
			[
				{
					text:'РазделительСформировать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:700px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:121px;width:210px;height:149px;',
			height: 149,width: 210,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:482px;top:121px;width:210px;height:149px;',
			height: 149,width: 210,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:97px;width:210px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:482px;top:97px;width:210px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:332px;height:149px;',
			height: 149,width: 332,
			columns:
			[
				{
					text:'КолонкаПредставление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:332px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'УстановитьПометки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:317px;width:684px;height:150px;',
			height: 150,width: 684,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:293px;width:684px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:360px;top:121px;width:332px;height:149px;',
			height: 149,width: 332,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:360px;top:97px;width:332px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:259px;height:19px;',
			height: 19,width: 259,
			items:
			[
				{
					title:'СтраницаПроизвольныйПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач1',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон1',
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода1',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаНаДату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату1',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод1',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод1',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:259px;height:19px;',
			height: 19,width: 259,
			items:
			[
				{
					title:'СтраницаПроизвольныйПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач2',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон2',
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода2',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаНаДату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату2',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод2',
			text: '-',
			style: 'position:absolute;left:57px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод2',
			text: '+',
			style: 'position:absolute;left:211px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:455px;top:121px;width:24px;height:149px;',
			items:
			[
				{
					text:'ДействиеПеренестиВИзмеренияКолонок',
				},
				{
					text:'ДействиеПеренестиВИзмеренияСтрок',
				},
			]
		},
	]
});