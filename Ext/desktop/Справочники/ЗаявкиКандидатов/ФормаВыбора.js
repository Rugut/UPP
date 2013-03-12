Ext.define('Справочники.ЗаявкиКандидатов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:649px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кандидаты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:633px;height:335px;',
			height: 335,width: 633,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Состояние',
					width:'100',
				},
				{
					text:'Физическое лицо',
					width:'100',
				},
				{
					text:'Организация',
					width:'350',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:341px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:248px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:649px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
			]
		},
	]
});