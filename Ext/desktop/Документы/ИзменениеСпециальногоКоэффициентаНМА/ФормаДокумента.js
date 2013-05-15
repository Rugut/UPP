Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:181px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:342px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:342px;width:369px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:365px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:365px;width:369px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:389px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:322px;top:33px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:55px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:55px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:118px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'55',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'183',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Понижающий коэффициент',
					width:'172',
					dataIndex:'СпециальныйКоэффициент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеСпециальногоКоэффициентаНМА/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'СпециальныйКоэффициент',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Нематериальные активы',
			style: 'position:absolute;left:8px;top:78px;width:460px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:476px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:94px;width:460px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить для списка НМА',
				},
			]
		},
	]
});