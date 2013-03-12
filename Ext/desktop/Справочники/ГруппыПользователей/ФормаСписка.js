Ext.define('Справочники.ГруппыПользователей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:567px;height:305px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Группы пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:551px;height:264px;',
			height: 264,width: 551,
			columns:
			[
				{
					text:'Наименование',
					width:'269',
				},
				{
					text:'Код',
					width:'101',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:567px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Настройка доступа',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие справка',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Показать состав пользователей группы',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});